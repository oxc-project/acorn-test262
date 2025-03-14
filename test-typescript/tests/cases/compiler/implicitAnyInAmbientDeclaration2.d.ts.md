implicitAnyInAmbientDeclaration2.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 539,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 24,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 436,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 436,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 142,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 141,
              "decorators": [],
              "name": "publicMember",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 175,
            "end": 197,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 196,
              "decorators": [],
              "name": "privateMember",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 260,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 256,
              "decorators": [],
              "name": "publicFunction",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 256,
              "end": 260,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 293,
            "end": 331,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 301,
              "end": 316,
              "decorators": [],
              "name": "privateFunction",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 316,
              "end": 331,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 317,
                  "end": 329,
                  "decorators": [],
                  "name": "privateParam",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 368,
            "end": 402,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 387,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 387,
              "end": 402,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 388,
                  "end": 400,
                  "decorators": [],
                  "name": "privateParam",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 438,
      "end": 539,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 539,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 509,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 478,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 478,
              "end": 509,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 479,
                  "end": 494,
                  "decorators": [],
                  "name": "publicConsParam",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 496,
                  "end": 507,
                  "decorators": [],
                  "name": "int",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 499,
                    "end": 507,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 501,
                      "end": 507
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 453,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
