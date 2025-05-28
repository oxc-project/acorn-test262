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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
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
            "value": "add",
            "raw": "'add'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 146,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 146,
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
            "value": "remove",
            "raw": "'remove'"
          },
          "definite": false
        }
      ],
      "declare": false
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "TestEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 33,
        "value": "./mod1",
        "raw": "\"./mod1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 83,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 83,
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
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 79,
              "decorators": [],
              "name": "TestEnum",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "ADD",
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 86,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 86,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "ADD",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 57,
                    "end": 62,
                    "value": "add",
                    "raw": "'add'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 68,
                  "end": 84,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 74,
                    "decorators": [],
                    "name": "REMOVE",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 76,
                    "end": 84,
                    "value": "remove",
                    "raw": "'remove'"
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
