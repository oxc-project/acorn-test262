__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 32,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 30,
                "end": 32,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 43,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 60,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 49,
          "end": 60,
          "properties": [
            {
              "type": "Property",
              "start": 51,
              "end": 58,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 56,
                "end": 58,
                "value": "",
                "raw": "''"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 74,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 74,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 65,
          "end": 74,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 74,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 129,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 101,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 129,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 123,
                    "argument": {
                      "type": "Literal",
                      "start": 121,
                      "end": 122,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 152,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 150,
                "end": 152,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 169,
          "end": 180,
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 178,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 174,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 176,
                "end": 178,
                "value": "",
                "raw": "''"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 185,
          "end": 194,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 191,
            "end": 194,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
