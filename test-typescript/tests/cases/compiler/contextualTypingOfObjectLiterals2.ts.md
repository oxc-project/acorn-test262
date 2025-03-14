__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 46,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 25,
                "end": 46,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 26,
                    "end": 35,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 40,
                    "end": 46
                  }
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 61,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 71,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 100,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 80,
            "end": 99,
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 97,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 85,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 87,
                  "end": 97,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 97,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 97,
                      "decorators": [],
                      "name": "hmm",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 79,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
