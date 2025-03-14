react.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 27,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 27,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"react\"",
        "value": "react"
      }
    }
  ],
  "sourceType": "module"
}
```
file1.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 46,
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 46,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 56,
        "end": 73,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 70,
          "end": 73,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "decorators": [],
          "name": "MyClass",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
file2.tsx
```json
{
  "type": "Program",
  "start": 33,
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 64,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 63,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 40,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 65,
      "end": 97,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 96,
        "raw": "'./file1'",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 73,
          "end": 80,
          "imported": {
            "type": "Identifier",
            "start": 73,
            "end": 80,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 73,
            "end": 80,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 111,
      "expression": {
        "type": "JSXElement",
        "start": 99,
        "end": 110,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 99,
          "end": 110,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 100,
            "end": 107,
            "name": "MyClass"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "module"
}
```
