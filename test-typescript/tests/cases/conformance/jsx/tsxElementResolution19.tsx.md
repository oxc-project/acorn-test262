__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "react",
        "raw": "\"react\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 27,
        "body": []
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 25,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 43,
              "end": 46,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 73,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 56,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "name": "MyClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 70,
          "end": 73,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 40,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 63,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 65,
      "end": 97,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 73,
          "end": 80,
          "imported": {
            "type": "Identifier",
            "start": 73,
            "end": 80,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 73,
            "end": 80,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 96,
        "value": "./file1",
        "raw": "'./file1'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 111,
      "expression": {
        "type": "JSXElement",
        "start": 99,
        "end": 110,
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
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
