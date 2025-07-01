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
            "name": "aaa",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CCC",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 22
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 29,
            "end": 45
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticY",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 78
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 79
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 121
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
                  "name": "aaa",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 125
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 137,
                          "end": 141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 143
                        },
                        "optional": false,
                        "computed": false,
                        "start": 137,
                        "end": 143
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 146,
                        "end": 148
                      },
                      "start": 137,
                      "end": 148
                    },
                    "directive": null,
                    "start": 137,
                    "end": 149
                  }
                ],
                "start": 127,
                "end": 201
              },
              "expression": false,
              "start": 121,
              "end": 201
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 110,
            "end": 201
          }
        ],
        "start": 23,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 203
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aaaa",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 245
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 248,
            "end": 249
          },
          "definite": false,
          "start": 241,
          "end": 249
        }
      ],
      "declare": false,
      "start": 237,
      "end": 250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CCCC",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 271,
                "end": 274
              },
              "start": 269,
              "end": 274
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 268,
            "end": 275
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 291
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
                  "name": "aaaa",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 296
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 308,
                          "end": 312
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 314
                        },
                        "optional": false,
                        "computed": false,
                        "start": 308,
                        "end": 314
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aaaa",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 321
                      },
                      "start": 308,
                      "end": 321
                    },
                    "directive": null,
                    "start": 308,
                    "end": 322
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 331,
                          "end": 335
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 336,
                          "end": 337
                        },
                        "optional": false,
                        "computed": false,
                        "start": 331,
                        "end": 337
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 340,
                        "end": 342
                      },
                      "start": 331,
                      "end": 342
                    },
                    "directive": null,
                    "start": 331,
                    "end": 343
                  }
                ],
                "start": 298,
                "end": 349
              },
              "expression": false,
              "start": 291,
              "end": 349
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 280,
            "end": 349
          }
        ],
        "start": 262,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 251,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
