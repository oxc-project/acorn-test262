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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 69,
            "name": "STATUS",
            "typeAnnotation": null,
            "decorators": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 79,
                    "end": 84,
                    "value": "404",
                    "raw": "\"404\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 87,
                    "end": 98,
                    "value": "not found",
                    "raw": "\"not found\""
                  },
                  "kind": "init",
                  "optional": false
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
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 129,
            "name": "hundredStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 132,
            "end": 137,
            "value": "100",
            "raw": "\"100\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 148,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 164,
                  "name": "hundredStr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 167,
                  "end": 172,
                  "value": "foo",
                  "raw": "\"foo\""
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
      "type": "VariableDeclaration",
      "start": 177,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 193,
            "name": "hundredNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 196,
            "end": 199,
            "value": 100,
            "raw": "100"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 227,
                  "name": "hundredNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 230,
                  "end": 235,
                  "value": "bar",
                  "raw": "\"bar\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
