__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 397,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "\"./\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 14,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 30,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 38,
          "end": 46,
          "value": "./mod1",
          "raw": "\"./mod1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 79,
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "Person",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 78,
                "value": "Name",
                "raw": "\"Name\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 90,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 89,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 89,
          "name": "thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 107,
      "expression": {
        "type": "MemberExpression",
        "start": 91,
        "end": 106,
        "object": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 106,
          "name": "readonlyProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 123,
      "expression": {
        "type": "MemberExpression",
        "start": 108,
        "end": 122,
        "object": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 111,
          "end": 122,
          "name": "rwAccessors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 144,
      "expression": {
        "type": "MemberExpression",
        "start": 124,
        "end": 143,
        "object": {
          "type": "Identifier",
          "start": 124,
          "end": 126,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 127,
          "end": 143,
          "name": "readonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 164,
      "expression": {
        "type": "MemberExpression",
        "start": 145,
        "end": 163,
        "object": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 148,
          "end": 163,
          "name": "setonlyAccessor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 203,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 202,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 197,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 197,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 200,
          "end": 202,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 224,
      "expression": {
        "type": "AssignmentExpression",
        "start": 204,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 204,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 206,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 218,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 223,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 252,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 243,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 228,
            "end": 243,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 246,
          "end": 251,
          "value": "yes",
          "raw": "\"yes\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 305,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 280,
          "end": 295,
          "object": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 295,
            "name": "readonlyProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 298,
          "end": 304,
          "value": "name",
          "raw": "\"name\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 331,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 306,
          "end": 325,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 325,
            "name": "readonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 328,
          "end": 330,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 332,
          "end": 340,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 343,
          "end": 347,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 370,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 363,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 363,
            "name": "rwAccessors",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 370,
          "value": "no",
          "raw": "\"no\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 372,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 372,
          "end": 390,
          "object": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 390,
            "name": "setonlyAccessor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 393,
          "end": 394,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
