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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 177,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 108,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 103,
              "end": 107,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 175,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 124,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 175,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 175,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 137,
                    "end": 169,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 143,
                        "end": 168,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 143,
                          "end": 151,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 145,
                              "end": 146,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 148,
                              "end": 149,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 149,
                                "name": "b",
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 159,
                                "end": 160,
                                "value": 1,
                                "raw": "1"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 162,
                              "end": 166,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 165,
                                "end": 166,
                                "value": 2,
                                "raw": "2"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
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
