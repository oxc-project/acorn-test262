__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 17
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./ch",
                  "raw": "'./ch'",
                  "start": 18,
                  "end": 24
                }
              ],
              "optional": false,
              "start": 10,
              "end": 25
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "optional": false,
            "computed": false,
            "start": 10,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "directive": null,
      "start": 28,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "grey",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 36
        },
        "optional": false,
        "computed": false,
        "start": 30,
        "end": 36
      },
      "directive": null,
      "start": 30,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 40
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "grey",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 45
        },
        "optional": false,
        "computed": false,
        "start": 37,
        "end": 45
      },
      "directive": null,
      "start": 37,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "grey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 18
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 20,
                  "end": 22
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 22
              }
            ],
            "start": 10,
            "end": 24
          },
          "definite": false,
          "start": 6,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "exportKind": "value",
          "start": 34,
          "end": 35
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
