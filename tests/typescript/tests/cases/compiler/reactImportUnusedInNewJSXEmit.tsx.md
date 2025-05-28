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
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "name": {
                  "type": "JSXIdentifier",
                  "start": 100,
                  "end": 103,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 145,
                    "end": 148,
                    "name": "Bar"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              }
            }
          ]
        },
        "expression": false
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
