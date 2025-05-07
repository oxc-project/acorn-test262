__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 298,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 22,
            "end": 24,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 298,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 298,
        "arguments": [
          {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 65,
            "end": 78,
            "raw": "\"accProperty\"",
            "value": "accProperty",
            "regex": null,
            "bigint": null
          },
          {
            "type": "TSTypeAssertion",
            "start": 80,
            "end": 297,
            "expression": {
              "type": "ObjectExpression",
              "start": 101,
              "end": 296,
              "properties": [
                {
                  "type": "Property",
                  "start": 119,
                  "end": 227,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 124,
                    "end": 227,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 136,
                      "end": 227,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 158,
                          "end": 178,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 158,
                            "end": 177,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 163,
                                "end": 176,
                                "raw": "\"public = 1;\"",
                                "value": "public = 1;",
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 162,
                              "decorators": [],
                              "name": "eval",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 199,
                          "end": 209,
                          "argument": {
                            "type": "Literal",
                            "start": 206,
                            "end": 208,
                            "raw": "11",
                            "value": 11,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 245,
                  "end": 282,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 248,
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 250,
                    "end": 282,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 263,
                      "end": 282,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 99,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 99,
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 59,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 45,
            "end": 59,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
