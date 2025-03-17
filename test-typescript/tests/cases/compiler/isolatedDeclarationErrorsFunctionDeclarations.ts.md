__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
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
          "name": "noReturn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 29,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "noParamAnnotation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 76,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 67,
          "end": 73,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 69,
            "end": 73
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "noParamAnnotationDefault",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 119,
            "end": 124,
            "left": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 134,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 125,
          "end": 131,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 127,
            "end": 131
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "noParamAnnotationBadDefault",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 180,
            "end": 189,
            "left": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 191,
            "end": 208,
            "left": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 210,
            "end": 231,
            "left": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 239,
          "end": 241,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 232,
          "end": 238,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 234,
            "end": 238
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "noParamAnnotationBadDefault2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 288,
            "end": 304,
            "left": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 312,
          "end": 314,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 305,
          "end": 311,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 307,
            "end": 311
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
