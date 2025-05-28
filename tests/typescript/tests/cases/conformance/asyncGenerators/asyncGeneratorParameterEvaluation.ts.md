__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 236,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 78,
          "end": 83,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 87,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 107,
          "end": 115,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 108,
              "end": 114,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 119,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "decorators": [],
        "name": "Super",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 146,
              "end": 155,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 150,
                  "end": 154
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 236,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "decorators": [],
        "name": "Super",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 234,
              "id": null,
              "generator": true,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 201,
                  "end": 206,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ObjectPattern",
                  "start": 208,
                  "end": 216,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 210,
                      "end": 214,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
