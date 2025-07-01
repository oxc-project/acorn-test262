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
            "name": "classesByRow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 26
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 35,
                      "end": 41
                    }
                  ],
                  "start": 26,
                  "end": 42
                },
                "start": 20,
                "end": 42
              },
              "start": 18,
              "end": 42
            },
            "start": 6,
            "end": 42
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 45,
            "end": 47
          },
          "definite": false,
          "start": 6,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "row",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "init": null,
            "definite": false,
            "start": 60,
            "end": 63
          }
        ],
        "declare": false,
        "start": 54,
        "end": 63
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 68,
            "end": 71
          },
          {
            "type": "Literal",
            "value": "2",
            "raw": "'2'",
            "start": 73,
            "end": 76
          },
          {
            "type": "Literal",
            "value": "3",
            "raw": "'3'",
            "start": 78,
            "end": 81
          },
          {
            "type": "Literal",
            "value": "4",
            "raw": "'4'",
            "start": 83,
            "end": 86
          },
          {
            "type": "Literal",
            "value": "5",
            "raw": "'5'",
            "start": 88,
            "end": 91
          }
        ],
        "start": 67,
        "end": 92
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RowClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 112
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
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 128
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 119,
                  "end": 129
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "factory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 148
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RowClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 169
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 157,
                      "end": 171
                    },
                    "id": null,
                    "generator": false,
                    "start": 151,
                    "end": 171
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 134,
                  "end": 172
                }
              ],
              "start": 113,
              "end": 176
            },
            "abstract": false,
            "declare": false,
            "start": 98,
            "end": 176
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
                  "name": "classesByRow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "row",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "optional": false,
                "computed": true,
                "start": 180,
                "end": 197
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "RowClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 208
              },
              "start": 180,
              "end": 208
            },
            "directive": null,
            "start": 180,
            "end": 209
          }
        ],
        "start": 94,
        "end": 211
      },
      "start": 49,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
