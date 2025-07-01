__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 12
          }
        ],
        "declare": false,
        "start": 7,
        "end": 13
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 14
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "EntityPrototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 77
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 89
          },
          "definite": false,
          "start": 62,
          "end": 89
        }
      ],
      "declare": false,
      "start": 58,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "WorkspacePrototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 113
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
                  "name": "serialize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 131
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 146,
                      "end": 149
                    },
                    "start": 144,
                    "end": 149
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 150,
                    "end": 157
                  },
                  "expression": false,
                  "start": 133,
                  "end": 157
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 157
              }
            ],
            "start": 116,
            "end": 159
          },
          "definite": false,
          "start": 95,
          "end": 159
        }
      ],
      "declare": false,
      "start": 91,
      "end": 160
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
            "name": "WorkspacePrototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 179
          },
          "property": {
            "type": "Literal",
            "value": "__proto__",
            "raw": "'__proto__'",
            "start": 180,
            "end": 191
          },
          "optional": false,
          "computed": true,
          "start": 161,
          "end": 192
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "EntityPrototype",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 210
        },
        "start": 161,
        "end": 210
      },
      "directive": null,
      "start": 161,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "__proto__",
                  "raw": "\"__proto__\"",
                  "start": 227,
                  "end": 238
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 240,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 227,
                "end": 241
              }
            ],
            "start": 221,
            "end": 243
          },
          "definite": false,
          "start": 217,
          "end": 243
        }
      ],
      "declare": false,
      "start": 213,
      "end": 244
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 252
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
              "type": "Literal",
              "value": "__proto__",
              "raw": "\"__proto__\"",
              "start": 259,
              "end": 270
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 273,
              "end": 274
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 259,
            "end": 275
          }
        ],
        "start": 253,
        "end": 277
      },
      "abstract": false,
      "declare": false,
      "start": 245,
      "end": 277
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 58,
  "end": 277
}
```
