__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 0
}
```
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "a",
              "start": 63,
              "end": 65
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
            "start": 63,
            "end": 66
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 120,
              "end": 122
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
            "start": 120,
            "end": 123
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 152,
                              "end": 156
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "a",
                              "start": 157,
                              "end": 159
                            },
                            "optional": false,
                            "computed": false,
                            "start": 152,
                            "end": 159
                          },
                          "operator": "||",
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 163,
                            "end": 165
                          },
                          "start": 152,
                          "end": 165
                        },
                        "definite": false,
                        "start": 148,
                        "end": 165
                      }
                    ],
                    "declare": false,
                    "start": 142,
                    "end": 166
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
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "b",
                          "start": 180,
                          "end": 182
                        },
                        "optional": false,
                        "computed": false,
                        "start": 175,
                        "end": 182
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "start": 190,
                            "end": 192
                          },
                          "optional": false,
                          "computed": false,
                          "start": 185,
                          "end": 192
                        },
                        "operator": "||",
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 196,
                          "end": 198
                        },
                        "start": 185,
                        "end": 198
                      },
                      "start": 175,
                      "end": 198
                    },
                    "directive": null,
                    "start": 175,
                    "end": 199
                  }
                ],
                "start": 132,
                "end": 205
              },
              "expression": false,
              "start": 129,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 128,
            "end": 205
          }
        ],
        "start": 8,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 207
}
```
