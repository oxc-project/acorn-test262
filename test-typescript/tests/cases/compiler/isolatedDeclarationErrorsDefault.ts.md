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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 21,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "kind": "init",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "kind": "init",
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
            "name": "const",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 21,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "kind": "init",
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
            "name": "const",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 15,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
