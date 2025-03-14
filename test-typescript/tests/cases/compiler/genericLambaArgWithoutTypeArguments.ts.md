genericLambaArgWithoutTypeArguments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 29,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 65,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 63,
            "argument": {
              "type": "Literal",
              "start": 58,
              "end": 62,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 102,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 101,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 101,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 86,
                  "end": 99,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 93,
                    "end": 98,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 96,
                      "decorators": [],
                      "name": "arg",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 74,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 79,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 79,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
