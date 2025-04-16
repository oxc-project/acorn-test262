__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 14,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 58,
  "end": 277,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 77,
            "name": "EntityPrototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 113,
            "name": "WorkspacePrototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 116,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 157,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "name": "serialize",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 133,
                  "end": 157,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 150,
                    "end": 157,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 146,
                      "end": 149
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 161,
          "end": 192,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 179,
            "name": "WorkspacePrototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 180,
            "end": 191,
            "value": "__proto__",
            "raw": "'__proto__'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 210,
          "name": "EntityPrototype",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 221,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 227,
                "end": 241,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 227,
                  "end": 238,
                  "value": "__proto__",
                  "raw": "\"__proto__\""
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 241,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 245,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 253,
        "end": 277,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 259,
            "end": 275,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 259,
              "end": 270,
              "value": "__proto__",
              "raw": "\"__proto__\""
            },
            "value": {
              "type": "Literal",
              "start": 273,
              "end": 274,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
