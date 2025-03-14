protoAsIndexInIndexExpression_0.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
protoAsIndexInIndexExpression_1.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 77,
            "decorators": [],
            "name": "EntityPrototype",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 113,
            "decorators": [],
            "name": "WorkspacePrototype",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "decorators": [],
                  "name": "serialize",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 133,
                  "end": 157,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 150,
                    "end": 157,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 179,
            "decorators": [],
            "name": "WorkspacePrototype",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 180,
            "end": 191,
            "raw": "'__proto__'",
            "value": "__proto__"
          }
        },
        "right": {
          "type": "Identifier",
          "start": 195,
          "end": 210,
          "decorators": [],
          "name": "EntityPrototype",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "o",
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
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 227,
                  "end": 238,
                  "raw": "\"__proto__\"",
                  "value": "__proto__"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 241,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 245,
      "end": 277,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 253,
        "end": 277,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 259,
            "end": 275,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 259,
              "end": 270,
              "raw": "\"__proto__\"",
              "value": "__proto__"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 273,
              "end": 274,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 252,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
