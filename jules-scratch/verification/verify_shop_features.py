import time
from playwright.sync_api import sync_playwright, Page, expect

def verify_shop_features(page: Page):
    """
    This script verifies the new e-commerce features:
    1. Navigates to the shop page.
    2. Takes a screenshot of the initial shop page.
    3. Applies filters and takes a screenshot of the results.
    4. Navigates to a product detail page and takes a screenshot.
    5. Adds an item to the cart and opens the mini-cart.
    6. Takes a screenshot of the mini-cart.
    """
    print("Navigating to the shop page...")
    # 1. Navigate to the shop page
    page.goto("http://localhost:3000/shop", timeout=60000)

    # Wait for the main heading to be visible
    expect(page.get_by_role("heading", name="Our Products")).to_be_visible(timeout=30000)

    # Wait for at least one product card to be loaded
    page.locator('a[href^="/shop/"]').first.wait_for(state="visible", timeout=30000)

    print("Taking screenshot of the initial shop page...")
    # 2. Take a screenshot of the main shop page
    page.screenshot(path="jules-scratch/verification/01_shop_page.png")

    print("Applying filters...")
    # 3. Interact with filters
    # Select category
    page.locator('aside').get_by_role('combobox').first.click()
    # Click the second item in the list (first is "All Categories")
    page.get_by_role('option').nth(1).click()

    # Set price range
    page.get_by_placeholder("Min").fill("10")
    page.get_by_placeholder("Max").fill("100")

    # Apply filters
    page.get_by_role("button", name="Apply Filters").click()

    # Wait for navigation/reload to complete
    page.wait_for_load_state('domcontentloaded', timeout=30000)
    page.locator('a[href^="/shop/"]').first.wait_for(state="visible", timeout=30000)


    print("Taking screenshot of the filtered shop page...")
    # 4. Take a screenshot of the filtered results
    page.screenshot(path="jules-scratch/verification/02_filtered_shop_page.png")

    print("Navigating to product detail page...")
    # 5. Click on a product to go to the product detail page
    page.locator('a[href^="/shop/"]').first.click()

    # Wait for the product page to load
    expect(page.get_by_role("button", name="Add to Cart")).to_be_visible(timeout=30000)

    print("Taking screenshot of the product detail page...")
    # 6. Take a screenshot of the product detail page
    page.screenshot(path="jules-scratch/verification/03_product_detail_page.png")

    print("Adding product to cart...")
    # 7. Click the "Add to Cart" button
    page.get_by_role("button", name="Add to Cart").click()

    # Check for "Added to Cart!" text
    expect(page.get_by_text("Added to Cart!")).to_be_visible(timeout=5000)

    print("Opening mini-cart...")
    # 8. Open the mini-cart
    # The mini-cart trigger is a button containing the ShoppingCart icon.
    page.locator('button:has(svg.lucide-shopping-cart)').click()

    # Wait for the mini-cart to be visible
    expect(page.get_by_role("heading", name="Shopping Cart")).to_be_visible(timeout=5000)

    print("Taking screenshot of the mini-cart...")
    # 9. Take a screenshot of the mini-cart
    page.screenshot(path="jules-scratch/verification/04_mini_cart.png")

    print("Verification script finished successfully.")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_shop_features(page)
        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    main()