symbolType18.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 20,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 42,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 30,
                "end": 42,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 30,
                    "end": 36
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 39,
                    "end": 42,
                    "typeName": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 42,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 48,
      "end": 101,
      "alternate": {
        "type": "BlockStatement",
        "start": 91,
        "end": 101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 97,
            "end": 99,
            "expression": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 75,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 73,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 52,
          "end": 60,
          "argument": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "raw": "\"object\"",
          "value": "object"
        }
      }
    }
  ],
  "sourceType": "script"
}
```
