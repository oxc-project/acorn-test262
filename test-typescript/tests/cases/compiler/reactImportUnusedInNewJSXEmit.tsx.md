__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 107,
            "argument": {
              "type": "JSXElement",
              "start": 99,
              "end": 106,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 99,
                "end": 106,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 100,
                  "end": 103,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 154,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 118,
        "end": 154,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 133,
          "end": 154,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 137,
              "end": 152,
              "argument": {
                "type": "JSXElement",
                "start": 144,
                "end": 151,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 144,
                  "end": 151,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 145,
                    "end": 148,
                    "name": "Bar"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 127,
          "end": 130,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
