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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 154,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 118,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 127,
          "end": 130,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                },
                "closingElement": null,
                "children": []
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
