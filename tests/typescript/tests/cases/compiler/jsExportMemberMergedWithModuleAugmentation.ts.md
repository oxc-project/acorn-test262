__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abcde",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 40,
            "end": 42
          }
        ],
        "start": 12,
        "end": 44
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 44
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
            "start": 46,
            "end": 52
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 46,
          "end": 60
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
                "name": "Abcde",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 72
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Abcde",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 72
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 67,
              "end": 72
            }
          ],
          "start": 63,
          "end": 74
        },
        "start": 46,
        "end": 74
      },
      "directive": null,
      "start": 46,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./test",
        "raw": "\"./test\"",
        "start": 22,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./test",
        "raw": "\"./test\"",
        "start": 48,
        "end": 56
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Abcde",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 76
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 82,
                      "end": 88
                    },
                    "start": 80,
                    "end": 88
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 79,
                  "end": 88
                }
              ],
              "start": 77,
              "end": 90
            },
            "declare": false,
            "start": 61,
            "end": 90
          }
        ],
        "start": 57,
        "end": 92
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 33,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Abcde",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 103
          },
          "typeArguments": null,
          "arguments": [],
          "start": 94,
          "end": 105
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "optional": false,
        "computed": false,
        "start": 94,
        "end": 107
      },
      "directive": null,
      "start": 94,
      "end": 108
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Abcde",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 220
                },
                "typeArguments": null,
                "start": 215,
                "end": 220
              },
              "start": 213,
              "end": 220
            },
            "start": 212,
            "end": 220
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 226
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 228,
                  "end": 230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 225,
                "end": 230
              }
            ],
            "start": 223,
            "end": 232
          },
          "definite": false,
          "start": 212,
          "end": 232
        }
      ],
      "declare": false,
      "start": 206,
      "end": 233
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
