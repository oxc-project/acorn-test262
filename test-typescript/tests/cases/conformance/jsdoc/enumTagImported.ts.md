__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 78,
            "end": 83,
            "raw": "'add'",
            "value": "add",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "decorators": [],
            "name": "tost",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 138,
            "end": 146,
            "raw": "'remove'",
            "value": "remove",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 33,
        "raw": "\"./mod1\"",
        "value": "./mod1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "TestEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "TestEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "decorators": [],
            "name": "tist",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 71,
            "end": 83,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 79,
              "decorators": [],
              "name": "TestEnum",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "ADD",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "start": 22,
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 86,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 43,
              "decorators": [],
              "name": "TestEnum",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 46,
              "end": 86,
              "properties": [
                {
                  "type": "Property",
                  "start": 52,
                  "end": 62,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "ADD",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 57,
                    "end": 62,
                    "raw": "'add'",
                    "value": "add",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 68,
                  "end": 84,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 74,
                    "decorators": [],
                    "name": "REMOVE",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 76,
                    "end": 84,
                    "raw": "'remove'",
                    "value": "remove",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
