__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "foge",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 38,
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 32,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 33,
                "end": 37,
                "value": 1024,
                "raw": "1024"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 68,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 67,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 60,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "decorators": [],
                "name": "foge",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 64,
                "end": 66,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 110,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 82,
            "decorators": [],
            "name": "stringTag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 85,
            "end": 109,
            "object": {
              "type": "Identifier",
              "start": 85,
              "end": 89,
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 90,
              "end": 108,
              "object": {
                "type": "Identifier",
                "start": 90,
                "end": 96,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 136,
              "decorators": [],
              "name": "byteLength",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 186,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 149,
            "decorators": [],
            "name": "species",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 152,
            "end": 185,
            "object": {
              "type": "Identifier",
              "start": 152,
              "end": 169,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 170,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 176,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 184,
                "decorators": [],
                "name": "species",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
