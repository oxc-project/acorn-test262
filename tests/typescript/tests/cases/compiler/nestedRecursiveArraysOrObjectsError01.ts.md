__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Style",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 13,
        "end": 35,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 13,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "StyleBase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 25,
            "end": 35,
            "typeName": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "StyleArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 37,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 57,
        "decorators": [],
        "name": "StyleArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 66,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 78,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 77,
                  "decorators": [],
                  "name": "Style",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 81,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 101,
        "decorators": [],
        "name": "StyleBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 108,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 220,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 141,
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 141,
                  "decorators": [],
                  "name": "Style",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 144,
            "end": 219,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 150,
                "end": 217,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 151,
                    "end": 216,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 152,
                        "end": 215,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 162,
                            "end": 173,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 165,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 167,
                              "end": 173,
                              "value": "asdf",
                              "raw": "'asdf'"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 183,
                            "end": 188,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 185,
                              "decorators": [],
                              "name": "jj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 187,
                              "end": 188,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
