__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 204,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 152,
            "argument": {
              "type": "BinaryExpression",
              "start": 142,
              "end": 151,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 142,
                "end": 145,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 148,
                "end": 151,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 115,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 120,
          "end": 127,
          "decorators": [],
          "name": "skipped",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 203,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 165,
                "end": 176,
                "properties": [
                  {
                    "type": "Property",
                    "start": 167,
                    "end": 174,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 170,
                      "end": 174,
                      "raw": "1000",
                      "value": 1000,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 178,
                "end": 189,
                "properties": [
                  {
                    "type": "Property",
                    "start": 180,
                    "end": 187,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 183,
                      "end": 187,
                      "raw": "3000",
                      "value": 3000,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 191,
                "end": 202,
                "properties": [
                  {
                    "type": "Property",
                    "start": 193,
                    "end": 200,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 196,
                      "end": 200,
                      "raw": "5000",
                      "value": 5000,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
