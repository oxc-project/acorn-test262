__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 23,
        "end": 27
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 49
            },
            "declare": false,
            "start": 28,
            "end": 49
          }
        ],
        "start": 22,
        "end": 51
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 72
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 73,
          "end": 76
        },
        "abstract": false,
        "declare": false,
        "start": 59,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 50
          },
          "start": 40,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 56,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 33,
      "end": 64
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 80
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 80
          },
          "importKind": "value",
          "start": 73,
          "end": 80
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file1",
        "raw": "'./file1'",
        "start": 87,
        "end": 96
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 65,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyClass",
            "start": 100,
            "end": 107
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 99,
          "end": 110
        },
        "children": [],
        "closingElement": null,
        "start": 99,
        "end": 110
      },
      "directive": null,
      "start": 99,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 111
}
```
