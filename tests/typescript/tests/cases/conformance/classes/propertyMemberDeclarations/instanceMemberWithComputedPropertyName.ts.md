__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 177,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 69,
      "expression": {
        "type": "Literal",
        "start": 56,
        "end": 68,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 82,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 177,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "value": true,
              "raw": "true"
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 124,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 175,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 137,
                    "end": 169,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 143,
                        "end": 168,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 143,
                          "end": 151,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 145,
                              "end": 146,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 148,
                              "end": 149,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 154,
                          "end": 168,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 156,
                              "end": 160,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 159,
                                "end": 160,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 162,
                              "end": 166,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 165,
                                "end": 166,
                                "value": 2,
                                "raw": "2"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
