__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 29,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "decorators": [],
          "name": "noReturn",
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
          "start": 27,
          "end": 29,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 76,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 64,
          "decorators": [],
          "name": "noParamAnnotation",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 67,
          "end": 73,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 69,
            "end": 73
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 76,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 134,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 85,
        "end": 134,
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 118,
          "decorators": [],
          "name": "noParamAnnotationDefault",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 119,
            "end": 124,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 131,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 127,
            "end": 131
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 134,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 241,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 143,
        "end": 241,
        "id": {
          "type": "Identifier",
          "start": 152,
          "end": 179,
          "decorators": [],
          "name": "noParamAnnotationBadDefault",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 180,
            "end": 189,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 184,
              "end": 189,
              "left": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "value": 1,
                "raw": "1"
              }
            },
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 191,
            "end": 208,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 196,
              "end": 208,
              "properties": [
                {
                  "type": "Property",
                  "start": 198,
                  "end": 206,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 201,
                    "end": 206,
                    "left": {
                      "type": "Literal",
                      "start": 201,
                      "end": 202,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 205,
                      "end": 206,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 210,
            "end": 231,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TSAsExpression",
              "start": 215,
              "end": 231,
              "expression": {
                "type": "ArrayExpression",
                "start": 215,
                "end": 222,
                "elements": [
                  {
                    "type": "BinaryExpression",
                    "start": 216,
                    "end": 221,
                    "left": {
                      "type": "Literal",
                      "start": 216,
                      "end": 217,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 220,
                      "end": 221,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 232,
          "end": 238,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 234,
            "end": 238
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 239,
          "end": 241,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 314,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 250,
        "end": 314,
        "id": {
          "type": "Identifier",
          "start": 259,
          "end": 287,
          "decorators": [],
          "name": "noParamAnnotationBadDefault2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 288,
            "end": 304,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 292,
              "end": 304,
              "properties": [
                {
                  "type": "Property",
                  "start": 294,
                  "end": 302,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 297,
                    "end": 302,
                    "left": {
                      "type": "Literal",
                      "start": 297,
                      "end": 298,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 301,
                      "end": 302,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 305,
          "end": 311,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 307,
            "end": 311
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 312,
          "end": 314,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
