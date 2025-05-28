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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 24,
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
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 45,
            "end": 59,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
            "value": "accProperty",
            "raw": "\"accProperty\""
          },
          {
            "type": "TSTypeAssertion",
            "start": 80,
            "end": 297,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 99,
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 101,
              "end": 296,
              "properties": [
                {
                  "type": "Property",
                  "start": 119,
                  "end": 227,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 124,
                    "end": 227,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "decorators": [],
                              "name": "eval",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 163,
                                "end": 176,
                                "value": "public = 1;",
                                "raw": "\"public = 1;\""
                              }
                            ],
                            "optional": false
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
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 245,
                  "end": 282,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 248,
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 250,
                    "end": 282,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 263,
                      "end": 282,
                      "body": []
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
