index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 30,
        "raw": "\"./data.json\"",
        "value": "./data.json"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "data",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 51,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "str",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 80,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 79,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 70,
            "end": 78,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 93,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 84,
            "end": 92,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 147,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 142,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 135,
            "end": 142,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 137,
              "end": 142,
              "elementType": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
