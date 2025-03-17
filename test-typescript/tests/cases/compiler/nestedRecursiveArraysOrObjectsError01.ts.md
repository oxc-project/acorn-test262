__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Style",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "StyleBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "StyleArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "StyleArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 66,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Style",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
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
        "name": "StyleBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 141,
            "name": "blah",
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
                  "name": "Style",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 165,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 167,
                              "end": 173,
                              "value": "asdf",
                              "raw": "'asdf'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 183,
                            "end": 188,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 185,
                              "name": "jj",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 187,
                              "end": 188,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
