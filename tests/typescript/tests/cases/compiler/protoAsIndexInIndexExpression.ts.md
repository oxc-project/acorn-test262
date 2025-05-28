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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 77,
            "decorators": [],
            "name": "EntityPrototype",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 113,
            "decorators": [],
            "name": "WorkspacePrototype",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "decorators": [],
                  "name": "serialize",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 133,
                  "end": 157,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 146,
                      "end": 149
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 150,
                    "end": 157,
                    "body": []
                  },
                  "expression": false
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
            "decorators": [],
            "name": "WorkspacePrototype",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 180,
            "end": 191,
            "value": "__proto__",
            "raw": "'__proto__'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 210,
          "decorators": [],
          "name": "EntityPrototype",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 244,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
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
    {
      "type": "ClassDeclaration",
      "start": 245,
      "end": 277,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 253,
        "end": 277,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 259,
            "end": 275,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 259,
              "end": 270,
              "value": "__proto__",
              "raw": "\"__proto__\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 273,
              "end": 274,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
