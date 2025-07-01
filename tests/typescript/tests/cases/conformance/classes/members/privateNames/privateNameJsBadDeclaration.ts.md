__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
        "start": 13,
        "end": 16
      },
      "expression": false,
      "start": 0,
      "end": 16
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 28
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 28
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "PrivateIdentifier",
                "name": "x",
                "start": 35,
                "end": 37
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 39,
                "end": 40
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 35,
              "end": 40
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "PrivateIdentifier",
                "name": "m",
                "start": 61,
                "end": 63
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
                  "body": [],
                  "start": 66,
                  "end": 68
                },
                "expression": false,
                "start": 63,
                "end": 68
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 61,
              "end": 68
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "PrivateIdentifier",
                "name": "p",
                "start": 91,
                "end": 93
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 105,
                        "end": 107
                      },
                      "start": 98,
                      "end": 107
                    }
                  ],
                  "start": 96,
                  "end": 109
                },
                "expression": false,
                "start": 93,
                "end": 109
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 87,
              "end": 109
            }
          ],
          "start": 31,
          "end": 120
        },
        "start": 17,
        "end": 120
      },
      "directive": null,
      "start": 17,
      "end": 120
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
        "start": 127,
        "end": 128
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 129,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 121,
      "end": 132
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
            "start": 133,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 144
          },
          "optional": false,
          "computed": false,
          "start": 133,
          "end": 144
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "PrivateIdentifier",
                "name": "y",
                "start": 151,
                "end": 153
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 155,
                "end": 156
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 151,
              "end": 156
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "PrivateIdentifier",
                "name": "m",
                "start": 177,
                "end": 179
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
                  "body": [],
                  "start": 182,
                  "end": 184
                },
                "expression": false,
                "start": 179,
                "end": 184
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 177,
              "end": 184
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "PrivateIdentifier",
                "name": "p",
                "start": 207,
                "end": 209
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 221,
                        "end": 223
                      },
                      "start": 214,
                      "end": 223
                    }
                  ],
                  "start": 212,
                  "end": 225
                },
                "expression": false,
                "start": 209,
                "end": 225
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 203,
              "end": 225
            }
          ],
          "start": 147,
          "end": 236
        },
        "start": 133,
        "end": 236
      },
      "directive": null,
      "start": 133,
      "end": 236
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
        "start": 243,
        "end": 244
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 260
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
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "z",
                          "start": 274,
                          "end": 276
                        },
                        "optional": false,
                        "computed": false,
                        "start": 269,
                        "end": 276
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 279,
                        "end": 280
                      },
                      "start": 269,
                      "end": 280
                    },
                    "directive": null,
                    "start": 269,
                    "end": 281
                  }
                ],
                "start": 263,
                "end": 285
              },
              "expression": false,
              "start": 260,
              "end": 285
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 249,
            "end": 285
          }
        ],
        "start": 245,
        "end": 287
      },
      "abstract": false,
      "declare": false,
      "start": 237,
      "end": 287
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
