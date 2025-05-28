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
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 70,
          "end": 73,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 111,
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
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 73,
            "end": 80,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "name": {
            "type": "JSXIdentifier",
            "start": 100,
            "end": 107,
            "name": "MyClass"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
