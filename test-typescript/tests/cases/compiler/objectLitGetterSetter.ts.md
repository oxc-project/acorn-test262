__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 299,
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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 22,
            "end": 24,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 298,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 298,
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 59,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 45,
            "end": 59,
            "name": "defineProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 65,
            "end": 78,
            "value": "accProperty",
            "raw": "\"accProperty\""
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 124,
                    "end": 227,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 136,
                      "end": 227,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 158,
                          "end": 178,
                          "expression": {
                            "type": "CallExpression",
                            "start": 158,
                            "end": 177,
                            "callee": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 162,
                              "name": "eval",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 163,
                                "end": 176,
                                "value": "public = 1;",
                                "raw": "\"public = 1;\""
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 199,
                          "end": 209,
                          "argument": {
                            "type": "Literal",
                            "start": 206,
                            "end": 208,
                            "value": 11,
                            "raw": "11"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 245,
                  "end": 282,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 248,
                    "name": "set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 250,
                    "end": 282,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 263,
                      "end": 282,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 99,
                "name": "PropertyDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
