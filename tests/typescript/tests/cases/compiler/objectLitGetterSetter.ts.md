__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 22,
            "end": 24
          },
          "definite": false,
          "start": 16,
          "end": 24
        }
      ],
      "declare": false,
      "start": 12,
      "end": 25
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 59
          },
          "optional": false,
          "computed": false,
          "start": 38,
          "end": 59
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 63
          },
          {
            "type": "Literal",
            "value": "accProperty",
            "raw": "\"accProperty\"",
            "start": 65,
            "end": 78
          },
          {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 99
              },
              "typeArguments": null,
              "start": 81,
              "end": 99
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "eval",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 162
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "public = 1;",
                                "raw": "\"public = 1;\"",
                                "start": 163,
                                "end": 176
                              }
                            ],
                            "optional": false,
                            "start": 158,
                            "end": 177
                          },
                          "directive": null,
                          "start": 158,
                          "end": 178
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 11,
                            "raw": "11",
                            "start": 206,
                            "end": 208
                          },
                          "start": 199,
                          "end": 209
                        }
                      ],
                      "start": 136,
                      "end": 227
                    },
                    "expression": false,
                    "start": 124,
                    "end": 227
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 119,
                  "end": 227
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 248
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 263,
                      "end": 282
                    },
                    "expression": false,
                    "start": 250,
                    "end": 282
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 245,
                  "end": 282
                }
              ],
              "start": 101,
              "end": 296
            },
            "start": 80,
            "end": 297
          }
        ],
        "optional": false,
        "start": 38,
        "end": 298
      },
      "directive": null,
      "start": 38,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 298
}
```
