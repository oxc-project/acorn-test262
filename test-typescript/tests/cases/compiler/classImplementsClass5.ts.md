__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 60,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 56,
                      "end": 57,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 40,
                  "end": 46
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 104,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 102,
              "end": 103,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 112,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 134,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 133,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 82,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 144,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 163,
        "end": 165,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 152,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 177,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 187,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
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
      "start": 189,
      "end": 196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 193,
          "end": 195,
          "decorators": [],
          "name": "c2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 197,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 197,
          "end": 199,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
