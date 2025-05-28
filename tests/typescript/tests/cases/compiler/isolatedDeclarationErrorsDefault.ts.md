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
        "left": {
          "type": "Literal",
          "start": 15,
          "end": 16,
          "value": 1,
          "raw": "1"
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "value": 1,
          "raw": "1"
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "BinaryExpression",
              "start": 22,
              "end": 27,
              "left": {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 26,
                "end": 27,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 21,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "BinaryExpression",
                  "start": 23,
                  "end": 28,
                  "left": {
                    "type": "Literal",
                    "start": 23,
                    "end": 24,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 27,
                    "end": 28,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 23,
                    "end": 28,
                    "left": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 40,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 23,
                    "end": 28,
                    "left": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
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
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 40,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 15,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
