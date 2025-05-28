__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "fs",
        "raw": "\"fs\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 51,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 51,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 51,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 32,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 74,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 50,
            "end": 73,
            "object": {
              "type": "CallExpression",
              "start": 50,
              "end": 63,
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 57,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "value": "fs",
                  "raw": "\"fs\""
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 64,
              "end": 73,
              "decorators": [],
              "name": "Something",
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
      "type": "ExpressionStatement",
      "start": 75,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 96,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 91,
          "object": {
            "type": "MemberExpression",
            "start": 75,
            "end": 89,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 82,
              "end": 89,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 94,
          "end": 96,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 97,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 97,
          "end": 115,
          "object": {
            "type": "MemberExpression",
            "start": 97,
            "end": 113,
            "object": {
              "type": "MemberExpression",
              "start": 97,
              "end": 111,
              "object": {
                "type": "Identifier",
                "start": 97,
                "end": 103,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 111,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 118,
          "end": 148,
          "properties": [
            {
              "type": "Property",
              "start": 124,
              "end": 146,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 124,
                "end": 129,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "NewExpression",
                "start": 131,
                "end": 146,
                "callee": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "Something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
