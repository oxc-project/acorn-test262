__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "PrivateIdentifier",
            "name": "nope",
            "start": 8,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 16,
          "end": 17
        },
        "start": 0,
        "end": 17
      },
      "directive": null,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 72,
        "end": 75
      },
      "expression": false,
      "start": 59,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 87
            },
            "optional": false,
            "computed": false,
            "start": 76,
            "end": 87
          },
          "property": {
            "type": "PrivateIdentifier",
            "name": "no",
            "start": 88,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 76,
          "end": 91
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 94,
          "end": 95
        },
        "start": 76,
        "end": 95
      },
      "directive": null,
      "start": 76,
      "end": 96
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 143
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 144,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 136,
      "end": 146
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 148
          },
          "property": {
            "type": "PrivateIdentifier",
            "name": "foo",
            "start": 149,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 147,
          "end": 153
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 156,
          "end": 157
        },
        "start": 147,
        "end": 157
      },
      "directive": null,
      "start": 147,
      "end": 158
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
        "start": 213,
        "end": 214
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
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 221,
              "end": 225
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 228,
              "end": 229
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 221,
            "end": 230
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 246
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "name": "exports",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 260,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 268,
                          "end": 272
                        },
                        "optional": false,
                        "computed": false,
                        "start": 260,
                        "end": 272
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 275,
                        "end": 276
                      },
                      "start": 260,
                      "end": 276
                    },
                    "directive": null,
                    "start": 260,
                    "end": 277
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 298,
                          "end": 302
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 303,
                          "end": 307
                        },
                        "optional": false,
                        "computed": false,
                        "start": 298,
                        "end": 307
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 310,
                        "end": 311
                      },
                      "start": 298,
                      "end": 311
                    },
                    "directive": null,
                    "start": 298,
                    "end": 312
                  }
                ],
                "start": 250,
                "end": 346
              },
              "expression": false,
              "start": 247,
              "end": 346
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 235,
            "end": 346
          }
        ],
        "start": 215,
        "end": 348
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```
