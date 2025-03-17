__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 39,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 46,
              "raw": "true",
              "value": true
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
        "name": "A",
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
      "start": 277,
      "end": 419,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 419,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 291,
            "end": 310,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 298,
              "end": 302,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 305,
              "end": 309,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "MethodDefinition",
            "start": 315,
            "end": 417,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 319,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 319,
              "end": 417,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 417,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 336,
                    "end": 343,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 336,
                      "end": 342,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 337,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 338,
                        "end": 342,
                        "name": "foo"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 324,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 321,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 323,
                      "end": 324,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
        "start": 283,
        "end": 284,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
