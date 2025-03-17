__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "BinaryExpression",
        "start": 15,
        "end": 20,
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 15,
          "end": 16,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "raw": "1",
          "value": 1
        }
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 30,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 29,
        "properties": [
          {
            "type": "Property",
            "start": 17,
            "end": 27,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "BinaryExpression",
              "start": 22,
              "end": 27,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "ArrayExpression",
        "start": 15,
        "end": 31,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 16,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 21,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "BinaryExpression",
                  "start": 23,
                  "end": 28,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 23,
                    "end": 24,
                    "raw": "1",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "start": 27,
                    "end": 28,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "TSAsExpression",
        "start": 15,
        "end": 40,
        "expression": {
          "type": "ArrayExpression",
          "start": 15,
          "end": 31,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 16,
              "end": 30,
              "properties": [
                {
                  "type": "Property",
                  "start": 18,
                  "end": 28,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 23,
                    "end": 28,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 40,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "TSAsExpression",
        "start": 15,
        "end": 40,
        "expression": {
          "type": "ArrayExpression",
          "start": 15,
          "end": 31,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 16,
              "end": 30,
              "properties": [
                {
                  "type": "Property",
                  "start": 18,
                  "end": 28,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 23,
                    "end": 28,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 40,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 20,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 18,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 15,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 22,
      "end": 39,
      "declaration": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
