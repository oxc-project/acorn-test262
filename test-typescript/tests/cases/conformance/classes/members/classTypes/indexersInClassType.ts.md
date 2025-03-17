__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 123,
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
        "end": 123,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 32,
            "parameters": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 24,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 16,
                  "end": 24,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 37,
            "end": 57,
            "parameters": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 56,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 62,
              "end": 63,
              "value": 1,
              "raw": "1"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 75,
              "end": 78,
              "value": "a",
              "raw": "'a'"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 82,
                "members": []
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 121,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 115,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
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
      "start": 125,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 133,
            "end": 140,
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 156,
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 154,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 182,
            "end": 185,
            "object": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
