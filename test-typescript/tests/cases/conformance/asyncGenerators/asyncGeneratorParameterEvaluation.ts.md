__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 78,
          "end": 83,
          "left": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 87,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 107,
          "end": 115,
          "properties": [
            {
              "type": "Property",
              "start": 108,
              "end": 114,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 119,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "name": "Super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 146,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 150,
                  "end": 154
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "name": "Sub",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "name": "Super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 201,
                  "end": 206,
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ObjectPattern",
                  "start": 208,
                  "end": 216,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 210,
                      "end": 214,
                      "argument": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "name": "w",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 220,
                    "end": 232,
                    "expression": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 231,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 229,
                        "object": {
                          "type": "Super",
                          "start": 220,
                          "end": 225
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 229,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
  "sourceType": "script",
  "hashbang": null
}
```
