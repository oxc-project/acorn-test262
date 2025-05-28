__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "O",
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
              "start": 25,
              "end": 43,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 31,
                  "end": 41,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 31,
                    "end": 41,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 31,
                      "end": 37,
                      "object": {
                        "type": "ThisExpression",
                        "start": 31,
                        "end": 35
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 114,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 58,
          "end": 114,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 66,
            "end": 114,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 72,
                "end": 112,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 83,
                  "end": 112,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 86,
                    "end": 112,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 96,
                        "end": 106,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 96,
                          "end": 106,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 96,
                            "end": 102,
                            "object": {
                              "type": "ThisExpression",
                              "start": 96,
                              "end": 100
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 105,
                            "end": 106,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null
              }
            ]
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "ja",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 147,
      "expression": {
        "type": "MemberExpression",
        "start": 143,
        "end": 147,
        "object": {
          "type": "Identifier",
          "start": 143,
          "end": 145,
          "decorators": [],
          "name": "ja",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "da",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 186,
      "expression": {
        "type": "MemberExpression",
        "start": 182,
        "end": 186,
        "object": {
          "type": "Identifier",
          "start": 182,
          "end": 184,
          "decorators": [],
          "name": "da",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
