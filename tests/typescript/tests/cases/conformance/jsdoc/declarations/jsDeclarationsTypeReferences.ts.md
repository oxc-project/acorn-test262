__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 48
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 49,
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 51
          }
        ],
        "start": 20,
        "end": 53
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
            "name": "Something",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 47
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
                "start": 50,
                "end": 57
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "fs",
                  "raw": "\"fs\"",
                  "start": 58,
                  "end": 62
                }
              ],
              "optional": false,
              "start": 50,
              "end": 63
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 73
            },
            "optional": false,
            "computed": false,
            "start": 50,
            "end": 73
          },
          "definite": false,
          "start": 38,
          "end": 73
        }
      ],
      "declare": false,
      "start": 32,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 87
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 90,
            "end": 105
          },
          "definite": false,
          "start": 82,
          "end": 105
        }
      ],
      "declare": false,
      "start": 76,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 122
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 122
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 131,
              "end": 136
            }
          ],
          "start": 125,
          "end": 138
        },
        "start": 108,
        "end": 138
      },
      "directive": null,
      "start": 108,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 139
}
```
