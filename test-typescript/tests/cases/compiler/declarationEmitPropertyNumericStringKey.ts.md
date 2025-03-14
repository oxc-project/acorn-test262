__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 239,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 69,
            "decorators": [],
            "name": "STATUS",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 72,
            "end": 110,
            "expression": {
              "type": "ObjectExpression",
              "start": 72,
              "end": 101,
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 98,
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 79,
                    "end": 84,
                    "raw": "\"404\"",
                    "value": "404"
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 87,
                    "end": 98,
                    "raw": "\"not found\"",
                    "value": "not found"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 110,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 129,
            "decorators": [],
            "name": "hundredStr",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 132,
            "end": 137,
            "raw": "\"100\"",
            "value": "100"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 148,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 172,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 164,
                  "decorators": [],
                  "name": "hundredStr",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 167,
                  "end": 172,
                  "raw": "\"foo\"",
                  "value": "foo"
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
      "type": "VariableDeclaration",
      "start": 177,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 193,
            "decorators": [],
            "name": "hundredNum",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 196,
            "end": 199,
            "raw": "100",
            "value": 100
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "decorators": [],
            "name": "obj2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 214,
            "end": 237,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 235,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 227,
                  "decorators": [],
                  "name": "hundredNum",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 230,
                  "end": 235,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
