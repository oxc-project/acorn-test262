__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 52,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 52,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 39,
                    "end": 48,
                    "argument": {
                      "type": "Literal",
                      "start": 46,
                      "end": 47,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 26,
                  "end": 32
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 105,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 94,
                    "end": 105,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 94,
                      "end": 103,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 94,
                        "end": 99
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 103,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
